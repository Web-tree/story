package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/web-tree/story/testutil/keeper"
	"github.com/web-tree/story/x/story/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.StoryKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
