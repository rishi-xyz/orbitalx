import {QueryClient} from "@tanstack/react-query";
import {toast} from "sonner";
import { shortenString } from "@/src/utils/string";

const reactQueryClient = new QueryClient({
    defaultOptions:{
        queries:{
            // 5 minutes: set data to be considered fresh for 5 minutes before refetching.
            staleTime:5*60*1000,
        },
        mutations:{
            onError:(err)=>{
                if("error" in err){
                    err = err.error as Error;
                }
                let message:string = err?.message || "An error occurred - No description";
                if(message.startsWith("Query failed with (6) : rpc error: code  = Unknown desc = failed to execute message;")){
                    message = message.replace(
                        "Query failed with (6) : rpc error: code  = Unknown desc = failed to execute message;",
                        ""
                    );
                }
                toast.error(shortenString(message,100));
            }
        }
    }
});

export default reactQueryClient;
