# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Создание проекта

```bash
echo ''           &>  env-info.txt ;\
echo '-- node '   &>> env-info.txt ;\
node -v           &>> env-info.txt ;\
echo '-- npm'     &>> env-info.txt ;\
npm -v            &>> env-info.txt ;\
echo '-- yarn'    &>> env-info.txt ;\
yarn --version    &>> env-info.txt ;\
echo '-- expo'    &>> env-info.txt ;\
expo --version    &>> env-info.txt ;\
cat env-info.txt
```
```bash
npm install --global yarn
```

```bash
npm install --global expo-cli
```
```bash
yarn global add expo-cli
```

* Проект создается командами

```shell
npx create-expo-app my-app
```
либо
```shell
yarn create expo my-app
```

## Запуск WEB-версии проекта
```shell
npx expo start
```
либо
```shell
yarn start
```

## Запуск на Android в Debian 12

```text
Самый простой способ запустить приложение на Android в Debian 12 — использовать Android Emulator. 
Вам потребуется установить Android Studio для настройки эмулятора.

1. Установите Android Studio: Следуйте инструкциям на официальном сайте Android Developers для 
установки Android Studio на Debian.
2. Создайте виртуальное устройство (AVD): В Android Studio создайте виртуальное 
устройство Android (эмулятор).
3. Запустите эмулятор: Запустите созданный вами эмулятор.
4. Запустите Expo: В терминале вашего проекта Expo выполните 
npx expo start или yarn start.
5.    Запустите на эмуляторе: После запуска Expo, в терминале нажмите клавишу a. 
Expo попытается подключиться к запущенному эмулятору и установить/открыть 
приложение Expo Go.
```

---

... далее сгенерированный текст ...

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
