import { DialogFooter } from "./ui/dialog"
import { DialogDescription } from "./ui/dialog"
import { DialogTitle } from "./ui/dialog"
import { DialogHeader } from "./ui/dialog"
import { ScrollArea } from "./ui/scroll-area"

const TransferContacts = ({ UserName, UserId }: { UserName: string; UserId: string }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <DialogHeader>
                <DialogTitle className='text-2xl font-semibold mb-3 m-1 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text'>
                    {UserName} with id;{UserId}
                </DialogTitle>
                <DialogDescription>
                    <ScrollArea className="flex flex-col h-[350px] w-[450px] mr-1 mt-2 rounded-md border">
                        <div className="text-lg font-semibold mb-4 md:mb-0 text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
                            No transactions with {UserName}
                        </div>
                    </ScrollArea>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className='flex items-center justify-center'>
                <div className="h-[1px] bg-gray-700 w-full  gap-4" />
            </DialogFooter>
        </div>
    )
}

export default TransferContacts