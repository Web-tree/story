package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/web-tree/story/x/story/types"
)

// GetEventCount get the total number of event
func (k Keeper) GetEventCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.EventCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetEventCount set the total number of event
func (k Keeper) SetEventCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.EventCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendEvent appends a event in the store with a new id and update the count
func (k Keeper) AppendEvent(
	ctx sdk.Context,
	event types.Event,
) uint64 {
	// Create the event
	count := k.GetEventCount(ctx)

	// Set the ID of the appended value
	event.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EventKey))
	appendedValue := k.cdc.MustMarshal(&event)
	store.Set(GetEventIDBytes(event.Id), appendedValue)

	// Update event count
	k.SetEventCount(ctx, count+1)

	return count
}

// SetEvent set a specific event in the store
func (k Keeper) SetEvent(ctx sdk.Context, event types.Event) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EventKey))
	b := k.cdc.MustMarshal(&event)
	store.Set(GetEventIDBytes(event.Id), b)
}

// GetEvent returns a event from its id
func (k Keeper) GetEvent(ctx sdk.Context, id uint64) (val types.Event, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EventKey))
	b := store.Get(GetEventIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveEvent removes a event from the store
func (k Keeper) RemoveEvent(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EventKey))
	store.Delete(GetEventIDBytes(id))
}

// GetAllEvent returns all event
func (k Keeper) GetAllEvent(ctx sdk.Context) (list []types.Event) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EventKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Event
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetEventIDBytes returns the byte representation of the ID
func GetEventIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetEventIDFromBytes returns ID in uint64 format from a byte array
func GetEventIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
