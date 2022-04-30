package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/web-tree/story/x/story/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EventAll(c context.Context, req *types.QueryAllEventRequest) (*types.QueryAllEventResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var events []types.Event
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	eventStore := prefix.NewStore(store, types.KeyPrefix(types.EventKey))

	pageRes, err := query.Paginate(eventStore, req.Pagination, func(key []byte, value []byte) error {
		var event types.Event
		if err := k.cdc.Unmarshal(value, &event); err != nil {
			return err
		}

		events = append(events, event)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllEventResponse{Event: events, Pagination: pageRes}, nil
}

func (k Keeper) Event(c context.Context, req *types.QueryGetEventRequest) (*types.QueryGetEventResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	event, found := k.GetEvent(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetEventResponse{Event: event}, nil
}
