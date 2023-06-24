import {
  Button,
  FormControl,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import PageContainer from '../../layouts/pageContainer'

const Contact = () => {
  const contact = {
    first: 'Ilham',
    last: 'Prabaswara',
  }
  return (
    <PageContainer>
      <div id="contact">
        <h1>
          {contact.first || contact.last ? (
            // <h1>
            //   {contact.first} {contact.last}
            // </h1>
            <>
              <Text mb={'50px'}>
                Got a project you'd like to discuss? I'm all ears.
              </Text>
              <FormControl>
                <Stack gap={'30px'}>
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Message"></Textarea>
                  <Button variant={'outline'} w={'full'}>
                    Submit
                  </Button>
                </Stack>
              </FormControl>
            </>
          ) : (
            <i>No Name</i>
          )}
        </h1>
      </div>
    </PageContainer>
  )
}

export default Contact
