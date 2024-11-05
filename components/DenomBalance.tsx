import React from "react";
import { useCodegenGeneratedTokenTokenMetadataByIdQuery } from "@euclidprotocol/graphql-codegen/dist/src/react";
import { ITokenType } from "@euclidprotocol/graphql-codegen";
import { convertMicroToMacro, formatAmountToInternational, UNITS } from "@andromedaprotocol/andromeda.js";
import { useGetBalance } from "@/src/hooks/useGetBalance";


interface BalanceValueProps {
  tokenId: string;
  selectedDenom: ITokenType | null;
  onMax?: (microValue: string, decimals: UNITS) => void;
}

export const BalanceValue: React.FC<BalanceValueProps> = ({
  tokenId,
  selectedDenom,
  onMax,
}) => {
  const { data: balance } = useGetBalance(selectedDenom, tokenId);

  const { data: metdata } = useCodegenGeneratedTokenTokenMetadataByIdQuery({
    variables: {
      token_token_metadata_by_id_token_id: tokenId,
    },
  });

  const decimals = metdata?.token?.token_metadata_by_id?.coinDecimal ?? 6;

  const macroBalance = formatAmountToInternational(
    convertMicroToMacro(balance, decimals),
    2
  );

  return (
    <div className="flex flex-col md:flex-row gap-2 p-2 bg-gradient-to-r from-green-400/40 to-blue-500/40 rounded-lg shadow-md">
      <div className="flex flex-row items-center gap-1 text-sm">
        <div className="text-opacity-70 text-white">Balance:</div>
        <div className="font-semibold text-white">{macroBalance}</div>
      </div>
      {onMax && (
        <div
          className="mt-1 md:mt-0 ml-0 md:ml-2 font-bold text-sm cursor-pointer underline text-white hover:text-opacity-80 transition"
          onClick={() => onMax(balance, decimals)}
        >
          Max
        </div>
      )}
    </div>
  );
};