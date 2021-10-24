import React, { useState } from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { CourierClient } from "@trycourier/courier";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      alert("Something broke! Please confirm your inputs are valid.")
      return
    }
    
    /*
    const courier = CourierClient(
      { authorizationToken: "pk_prod_YS21X04A3649JBHY2RNP7RRHWMZ9"});

    const { messageId } = await courier.send({
      eventId: "courier-quickstart",
      recipientId: "amitferman@gmail.com",
      data: {
        favoriteAdjective: "awesomeness"
      },
      profile: {
        email: "amitferman@gmail.com"
      }
    });

    alert("Password reset email [" + messageId + "] successfully sent to " + email.value + "!");
    */

    alert("Sorry! We haven't implemented this yet!")
    return
    // reset password
    // TODO: implement sending email to given user
    // For fixing password: https://huskypackapi.azurewebsites.net/api/user/configure?id=0&password=superhusky
    const stat = await fetch("")
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}
