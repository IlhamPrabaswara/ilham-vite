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
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormType> = async (dataMessage) => {
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
              Got a project you'd like to discuss? I'm all ears.
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
                        <Input placeholder="First Name" {...field} />
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
                      <Input {...field} />
                    </FormControl>
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input {...field} />
                    </FormControl>
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel>Message</FormLabel>
                      <Textarea {...field} />
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
