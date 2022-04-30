package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:    PortID,
		EventList: []Event{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in event
	eventIdMap := make(map[uint64]bool)
	eventCount := gs.GetEventCount()
	for _, elem := range gs.EventList {
		if _, ok := eventIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for event")
		}
		if elem.Id >= eventCount {
			return fmt.Errorf("event id should be lower or equal than the last id")
		}
		eventIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
