import { useState } from 'react'
import {
  Button,
  FormControl,
  Input,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalFooter,
  // ModalHeader,
  // ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import PageContainer from '../../layouts/pageContainer'
import { supabase } from '../../utils/supabaseClient'
import { ContactFormType } from '../../interfaces/contact.interfaces'

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [input, setInput] = useState<ContactFormType>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { data } = await supabase
      .from('messages')
      .insert({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        message: input.message,
      })
      .select()

    if (data) {
      setInput({
        ...input,
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })
      alert("Your message is successfully sent!")
      // return (
      //   <Modal isOpen={isOpen} onClose={onClose}>
      //     <ModalOverlay />
      //     <ModalContent>
      //       <ModalHeader>Modal Title</ModalHeader>
      //       <ModalCloseButton />
      //       <ModalBody>
      //         <h1>Hello</h1>
      //       </ModalBody>

      //       <ModalFooter>
      //         <Button colorScheme="blue" mr={3} onClick={onClose}>
      //           Close
      //         </Button>
      //         <Button variant="ghost">Secondary Action</Button>
      //       </ModalFooter>
      //     </ModalContent>
      //   </Modal>
      // )
    }
  }
  return (
    <PageContainer>
      <div id="contact">
        <h1>
          <>
            <Text mb={'50px'}>
              Got a project you'd like to discuss? I'm all ears.
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Stack gap={'30px'}>
                  <Input
                    name="firstName"
                    value={input.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <Input
                    name="lastName"
                    value={input.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                  <Input
                    name="email"
                    value={input.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <Textarea
                    name="message"
                    value={input.message}
                    placeholder="Message"
                    onChange={handleChange}
                  />
                  <Button
                    type="submit"
                    variant={'outline'}
                    w={'full'}
                    onClick={onOpen}
                    onChange={handleChange}
                  >
                    Submit
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </>
        </h1>
      </div>
    </PageContainer>
  )
}

export default Contact
