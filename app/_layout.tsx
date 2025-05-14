import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="landing"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)/PhoneScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)/OtpScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/QuickIntroScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/AgeConfirmationModal"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/HeightSelector"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/RelationshipStatus"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/ReligionSelection"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/LanguageSelection"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/HabitSelectionScreen"
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="(intro)/RelationshipGoalsScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(intro)/FaceRevealScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
