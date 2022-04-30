package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateEvent = "create_event"
	TypeMsgUpdateEvent = "update_event"
	TypeMsgDeleteEvent = "delete_event"
)

var _ sdk.Msg = &MsgCreateEvent{}

func NewMsgCreateEvent(creator string, giverId string, takerId string, giverSign string, takerSign string, unionId string, typeId string, body string) *MsgCreateEvent {
	return &MsgCreateEvent{
		Creator:   creator,
		GiverId:   giverId,
		TakerId:   takerId,
		GiverSign: giverSign,
		TakerSign: takerSign,
		UnionId:   unionId,
		TypeId:    typeId,
		Body:      body,
	}
}

func (msg *MsgCreateEvent) Route() string {
	return RouterKey
}

func (msg *MsgCreateEvent) Type() string {
	return TypeMsgCreateEvent
}

func (msg *MsgCreateEvent) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateEvent) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateEvent) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateEvent{}

func NewMsgUpdateEvent(creator string, id uint64, giverId string, takerId string, giverSign string, takerSign string, unionId string, typeId string, body string) *MsgUpdateEvent {
	return &MsgUpdateEvent{
		Id:        id,
		Creator:   creator,
		GiverId:   giverId,
		TakerId:   takerId,
		GiverSign: giverSign,
		TakerSign: takerSign,
		UnionId:   unionId,
		TypeId:    typeId,
		Body:      body,
	}
}

func (msg *MsgUpdateEvent) Route() string {
	return RouterKey
}

func (msg *MsgUpdateEvent) Type() string {
	return TypeMsgUpdateEvent
}

func (msg *MsgUpdateEvent) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateEvent) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateEvent) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteEvent{}

func NewMsgDeleteEvent(creator string, id uint64) *MsgDeleteEvent {
	return &MsgDeleteEvent{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteEvent) Route() string {
	return RouterKey
}

func (msg *MsgDeleteEvent) Type() string {
	return TypeMsgDeleteEvent
}

func (msg *MsgDeleteEvent) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteEvent) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteEvent) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
