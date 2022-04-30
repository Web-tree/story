package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/web-tree/story/x/story/types"
)

func (k msgServer) CreateEvent(goCtx context.Context, msg *types.MsgCreateEvent) (*types.MsgCreateEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var event = types.Event{
		Creator:   msg.Creator,
		GiverId:   msg.GiverId,
		TakerId:   msg.TakerId,
		GiverSign: msg.GiverSign,
		TakerSign: msg.TakerSign,
		UnionId:   msg.UnionId,
		TypeId:    msg.TypeId,
		Body:      msg.Body,
	}

	id := k.AppendEvent(
		ctx,
		event,
	)

	return &types.MsgCreateEventResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateEvent(goCtx context.Context, msg *types.MsgUpdateEvent) (*types.MsgUpdateEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var event = types.Event{
		Creator:   msg.Creator,
		Id:        msg.Id,
		GiverId:   msg.GiverId,
		TakerId:   msg.TakerId,
		GiverSign: msg.GiverSign,
		TakerSign: msg.TakerSign,
		UnionId:   msg.UnionId,
		TypeId:    msg.TypeId,
		Body:      msg.Body,
	}

	// Checks that the element exists
	val, found := k.GetEvent(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetEvent(ctx, event)

	return &types.MsgUpdateEventResponse{}, nil
}

func (k msgServer) DeleteEvent(goCtx context.Context, msg *types.MsgDeleteEvent) (*types.MsgDeleteEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetEvent(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveEvent(ctx, msg.Id)

	return &types.MsgDeleteEventResponse{}, nil
}
