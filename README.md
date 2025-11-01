# Live

https://SanyBlagorodny.github.io/SF-Kanban-board/

# Layout

Figma: https://www.figma.com/file/yotdhAHetNQZy1tOi1UTPk/Kanban?node-id=0%3A1

# О проекте

Канбан‑доска на React (CRA). Поддерживает выбор языка при первом входе (RU/EN), авторизацию с локальной регистрацией (localStorage), просмотр/редактирование задач, адаптивный интерфейс.

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

По умолчанию используется HashRouter, поэтому маршруты имеют вид `#/...`.

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

В проекте настроен деплой через **GitHub Actions** (рекомендуется) и альтернативно через пакет `gh-pages`.

### Вариант A. GitHub Actions (рекомендуется)

1. В репозитории GitHub: Settings → Pages → Build and deployment → выбрать "GitHub Actions".
2. Пуш в ветку `main` автоматически запускает Workflow и публикует сайт.

Live: https://SanyBlagorodny.github.io/SF-Kanban-board/

### Вариант B. Пакет gh-pages (альтернатива)

Скрипты:

- `npm run build` — сборка
- `npm run deploy` — публикация содержимого папки `build` в ветку `gh-pages`

В `package.json` задан `homepage`: `https://SanyBlagorodny.github.io/SF-Kanban-board` — адрес опубликованного приложения.

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
