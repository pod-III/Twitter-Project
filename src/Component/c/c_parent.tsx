import { ChakraProvider } from "@chakra-ui/react";
import { SearchBar } from "./serachbar"
import { Trending } from "./trending"
import { FollowSG } from "./followsg"
import { Links } from "./links"
import { Copyright } from "./copyright"


export const ComponentA = () => (
    <ChakraProvider>
        <SearchBar />
        <Trending />
        <FollowSG />
        <Links />
        <Copyright />
    </ChakraProvider>

)

// c.1 search bar (fixed)
// c.2 trending 
// c.3 who to follow
// c.4 links
// c.5 copyright 
