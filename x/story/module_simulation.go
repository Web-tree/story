package story

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/web-tree/story/testutil/sample"
	storysimulation "github.com/web-tree/story/x/story/simulation"
	"github.com/web-tree/story/x/story/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = storysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateEvent = "op_weight_msg_event"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateEvent int = 100

	opWeightMsgUpdateEvent = "op_weight_msg_event"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateEvent int = 100

	opWeightMsgDeleteEvent = "op_weight_msg_event"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteEvent int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	storyGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		EventList: []types.Event{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		EventCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&storyGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateEvent int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateEvent, &weightMsgCreateEvent, nil,
		func(_ *rand.Rand) {
			weightMsgCreateEvent = defaultWeightMsgCreateEvent
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateEvent,
		storysimulation.SimulateMsgCreateEvent(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateEvent int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateEvent, &weightMsgUpdateEvent, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateEvent = defaultWeightMsgUpdateEvent
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateEvent,
		storysimulation.SimulateMsgUpdateEvent(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteEvent int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteEvent, &weightMsgDeleteEvent, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteEvent = defaultWeightMsgDeleteEvent
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteEvent,
		storysimulation.SimulateMsgDeleteEvent(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
