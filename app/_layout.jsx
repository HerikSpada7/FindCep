import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    // Desativando aquele "Index" padrão localizado no canto superior esquerdo.
    <Stack>
      <Stack.Screen name="index" options={{title: '', headerTransparent: true, headerShown: false}}     />
    </Stack>
  )
}
