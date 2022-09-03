import { ChakraProvider } from "@chakra-ui/react";
import { TwitterLogo } from "./twitterLogo"
import { NavBar } from "./navbar"
import { TweetButton } from "./tweetbtn"
import { ProfileSelection } from "./profilesel"


export const ComponentA = () => (
    <ChakraProvider>
        <TwitterLogo />
        <NavBar />
        <TweetButton />
        <ProfileSelection />
    </ChakraProvider>

)

// a.1 twitter logo 
// a.2 navbar
// a.3 tweet button 
// a.4 profile selection
