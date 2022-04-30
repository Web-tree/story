package story_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/web-tree/story/testutil/keeper"
	"github.com/web-tree/story/testutil/nullify"
	"github.com/web-tree/story/x/story"
	"github.com/web-tree/story/x/story/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.StoryKeeper(t)
	story.InitGenesis(ctx, *k, genesisState)
	got := story.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
