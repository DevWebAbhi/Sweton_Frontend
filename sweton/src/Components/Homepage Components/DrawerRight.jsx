import React, { useEffect } from "react";
import { useDisclosure,Input,Button ,Box} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { useMediaQuery } from '@chakra-ui/react';
function DrawerRight({isDrawerRight,setDrawerRight}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
    const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
    const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");
    const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");
  
    const modalWidth = isSmallerThan400?'85%':(isSmallerThan550?'75%':(isSmallerThan850?'65%':(isSmallerThan1000?'50%':'30%')));
   useEffect(()=>{
    if(!isOpen){
        onClose();
        setDrawerRight(false);
       }
   if(isDrawerRight){
    onOpen();
   }
   
   },[isDrawerRight,isOpen])
    return (
      <>
        
        
     <Box width={'100%'} height={'100%'} onClick={onClose}>
     <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={'white'}  maxW={modalWidth}   paddingLeft={'1rem'} borderLeft={'4px solid rgba(207,3,3)'}>
         
          <DrawerHeader fontSize='1.5rem' textAlign={'center'} >Cart Items</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
     </Box>
      </>
    )
  }

  export default DrawerRight;