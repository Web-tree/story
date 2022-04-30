package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/web-tree/story/testutil/keeper"
	"github.com/web-tree/story/testutil/nullify"
	"github.com/web-tree/story/x/story/keeper"
	"github.com/web-tree/story/x/story/types"
)

func createNEvent(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Event {
	items := make([]types.Event, n)
	for i := range items {
		items[i].Id = keeper.AppendEvent(ctx, items[i])
	}
	return items
}

func TestEventGet(t *testing.T) {
	keeper, ctx := keepertest.StoryKeeper(t)
	items := createNEvent(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetEvent(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestEventRemove(t *testing.T) {
	keeper, ctx := keepertest.StoryKeeper(t)
	items := createNEvent(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveEvent(ctx, item.Id)
		_, found := keeper.GetEvent(ctx, item.Id)
		require.False(t, found)
	}
}

func TestEventGetAll(t *testing.T) {
	keeper, ctx := keepertest.StoryKeeper(t)
	items := createNEvent(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllEvent(ctx)),
	)
}

func TestEventCount(t *testing.T) {
	keeper, ctx := keepertest.StoryKeeper(t)
	items := createNEvent(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetEventCount(ctx))
}
