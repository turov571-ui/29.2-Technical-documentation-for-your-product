---
sidebar_position: 3
title: Маппинг экранов на endpoints
---

# Маппинг экранов на endpoints

## Таблица источников данных

| Экран | Момент / Действие | Endpoint | Метод | Роль |
|---|---|---|---|---|
| `/health` | При открытии экрана | `/health-profile` | GET | CLIENT |
| `/health` | Нажатие «Отправить» | `/health-data` | POST | CLIENT |
| `/recommendation` | При открытии экрана | `/recommendation/{clientId}` | GET | CLIENT |
| `/trainer/clients` | При открытии экрана | `/trainer/clients?page=0&size=20&sort=readinessIndex,desc` | GET | TRAINER |
| `/trainer/clients/{clientId}` | При открытии карточки | `/trainer/clients/{clientId}?historyDays=30` | GET | TRAINER |

## Примечания

- `clientId` в `/recommendation/{clientId}` берётся из JWT-токена на стороне фронтенда — пользователь его явно не передаёт.
- История метрик (`healthHistory`) возвращается в составе ответа `GET /trainer/clients/{clientId}`, отдельного endpoint не требуется при глубине до 365 дней.
- Уведомления тренеру инициируются на стороне backend/n8n, не фронтенда.
