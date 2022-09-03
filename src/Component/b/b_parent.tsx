import { ChakraProvider } from "@chakra-ui/react";
import { HomeBar } from "./homebar"
import { InsertTweet } from "./insertweet"
import { TweetTL } from "./tweetl"


export const ComponentA = () => (
    <ChakraProvider>
        <HomeBar />
        <InsertTweet />
        <TweetTL />
    </ChakraProvider>

)

// b.1 homebar (fixed)
// b.2 insert tweet 
// b.3 tweets TL (infinite scroll)