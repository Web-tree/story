package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/web-tree/story/x/story/types"
)

func CmdCreateEvent() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-event [giver-id] [taker-id] [giver-sign] [taker-sign] [union-id] [type-id] [body]",
		Short: "Create a new event",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argGiverId := args[0]
			argTakerId := args[1]
			argGiverSign := args[2]
			argTakerSign := args[3]
			argUnionId := args[4]
			argTypeId := args[5]
			argBody := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateEvent(clientCtx.GetFromAddress().String(), argGiverId, argTakerId, argGiverSign, argTakerSign, argUnionId, argTypeId, argBody)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateEvent() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-event [id] [giver-id] [taker-id] [giver-sign] [taker-sign] [union-id] [type-id] [body]",
		Short: "Update a event",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argGiverId := args[1]

			argTakerId := args[2]

			argGiverSign := args[3]

			argTakerSign := args[4]

			argUnionId := args[5]

			argTypeId := args[6]

			argBody := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateEvent(clientCtx.GetFromAddress().String(), id, argGiverId, argTakerId, argGiverSign, argTakerSign, argUnionId, argTypeId, argBody)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteEvent() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-event [id]",
		Short: "Delete a event by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteEvent(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
