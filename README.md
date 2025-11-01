# Layout 

figma: (https://www.figma.com/file/yotdhAHetNQZy1tOi1UTPk/Kanban?node-id=0%3A1)
 
# Запуск и документация проекта

Проект создан на основе [Create React App](https://github.com/facebook/create-react-app).

## Требования

- Node.js 16.x или 18.x
- npm 8+ или 9+

Проверить версии:

```bash
node -v
npm -v
```

## Установка

```bash
npm install
```

Если установка падает, попробуйте:

- удалить папку `node_modules` и файл `package-lock.json`, затем снова `npm install`
- очистить кэш: `npm cache verify`

## Локальный запуск (dev)

```bash
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000). Горячая перезагрузка включена.

## Тесты

```bash
npm test
```

Интерактивный режим запуска тестов (watch).

## Сборка продакшн-версии

```bash
npm run build
```

Сборка появится в папке `build` и будет оптимизирована для продакшна.

## Деплой на GitHub Pages

В проекте настроен деплой с помощью `gh-pages`.

Скрипты:

- `npm run build` — сборка
- `npm run deploy` — публикация содержимого папки `build` в ветку `gh-pages`

В `package.json` задан `homepage`: ` — это адрес опубликованного приложения.

## Структура (основное)

- `public/` — статические файлы
- `src/` — исходный код приложения

## Устранение неполадок запуска

- «Порт 3000 занят» — завершите процессы, использующие порт, или укажите иной порт: `set PORT=3001 && npm start` (Windows PowerShell: `$env:PORT=3001; npm start`).
- «react-scripts не найден» — переустановите зависимости: удалите `node_modules` и `package-lock.json`, затем `npm install`.
- Конфликт версий Node — используйте LTS (16 или 18). Проверьте `node -v`.
- Проблемы с правами — запустите терминал от имени администратора.

Если ошибка сохраняется — запустите команду, скопируйте полный лог из консоли и приложите его к обращению.

## Полезные ссылки

- CRA Docs: https://facebook.github.io/create-react-app/docs/getting-started
- React Docs: https://react.dev/
