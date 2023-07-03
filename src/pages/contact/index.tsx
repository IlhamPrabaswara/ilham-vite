import { useEffect } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import PageContainer from '../../layouts/pageContainer'
import { supabase } from '../../utils/supabaseClient'
import { ContactFormType } from '../../interfaces/contact.interfaces'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

const Contact = () => {
  const { control, handleSubmit, reset, formState } = useForm<ContactFormType>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormType> = async (dataMessage) => {
    const res = await supabase
      .from('messages')
      .insert({
        firstName: dataMessage.firstName,
        lastName: dataMessage.lastName,
        email: dataMessage.email,
        message: dataMessage.message,
      })
      .select()
    const data = res.data as ContactFormType[]
    if (data) {
      alert(`Hi ${data[0].firstName}! your message is successfully sent!`)
    }
    // Try catch
    // Absolute import untuk vite
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })
    }
  }, [formState])

  return (
    <PageContainer>
      <div id="contact">
        <h1>
          <>
            <Text mb={'50px'}>
              Got a project you`&apos;`d like to discuss? I`&apos;`m all ears.
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap={'30px'}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          placeholder="Your first name (required)"
                          {...field}
                        />
                      </FormControl>
                    </>
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        placeholder="Your last name (required)"
                        {...field}
                      />
                    </FormControl>
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input placeholder="Your email (required)" {...field} />
                    </FormControl>
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel>Message</FormLabel>
                      <Textarea placeholder="Message" {...field} />
                    </FormControl>
                  )}
                />
                <Button type="submit" variant={'outline'} w={'full'}>
                  Submit
                </Button>
              </Stack>
            </form>
          </>
        </h1>
      </div>
    </PageContainer>
  )
}

export default Contact
