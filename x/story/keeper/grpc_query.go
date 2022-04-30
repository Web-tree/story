package keeper

import (
	"github.com/web-tree/story/x/story/types"
)

var _ types.QueryServer = Keeper{}
