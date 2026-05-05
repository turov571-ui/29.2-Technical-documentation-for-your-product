---
sidebar_position: 2
title: Kafka топики
---

# Kafka топики

Kafka используется как асинхронная шина событий между backend-компонентами и workflow-логикой n8n.

## Список топиков

| Топик | Producer | Consumer | Назначение |
|---|---|---|---|
| `health.data.saved` | Backend API | n8n | Событие о сохранении метрик здоровья |
| `notification.send` | n8n | Notification Worker | Событие на отправку уведомления тренеру |

## Принципы интеграции

- Backend публикует **доменные события**, не команды — подписчики сами решают, что с ними делать.
- Downstream-компоненты подписываются на нужные топики независимо.
- Асинхронный поток снижает связность: Backend API не знает о существовании OneSignal.

## Схема взаимодействия

```
Backend API
    │
    ├─ INSERT health_data (PostgreSQL)
    └─ publish → [health.data.saved]
                          │
                       n8n Workflow
                          │
                          ├─ Calculate Readiness Index
                          ├─ Apply DMN Rules
                          ├─ POST /recommendations → Backend API
                          │
                          └─ (если index < 4.0)
                             publish → [notification.send]
                                              │
                                       Notification Worker
                                              │
                                       POST OneSignal API
```


