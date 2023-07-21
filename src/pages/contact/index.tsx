import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import MainLayout from '../../layout'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { supabase } from '../../utils/supabaseClient'
import { ContactFormInterface } from '../../interfaces/contact.interfaces'

const Contact = () => {
  const { control, handleSubmit, reset, formState } = useForm<ContactFormInterface>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  })
  const onSubmit: SubmitHandler<ContactFormInterface> = async (dataMessage) => {
    const { data }: any = await supabase
      .from('messages')
      .insert({
        firstName: dataMessage.firstName,
        lastName: dataMessage.lastName,
        email: dataMessage.email,
        message: dataMessage.message,
      })
      .select()
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
    <MainLayout>
      <div id="contact">
        <h1>
          <>
            <Text mb={'50px'}>
              Got a project you&apos;d like to discuss? I&apos;m all ears.
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
    </MainLayout>
  )
}

export default Contact
