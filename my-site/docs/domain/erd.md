---
sidebar_position: 1
title: ERD
---

# Доменная модель и ERD

В этом разделе описывается модель данных FitAdapt: ключевые сущности, их связи и направления дальнейшей детализации.

## Основные сущности

- `user` — пользователь системы с ролью CLIENT, TRAINER или ADMIN.
- `health_data` — ежедневные метрики состояния клиента.
- `recommendation` — рекомендация по тренировке на основе Readiness Index.
- `trainer_client` — связь между тренером и клиентом.

## Концептуальная модель

Система строится вокруг клиента, его ежедневных метрик и рекомендаций, доступных как самому клиенту, так и связанному с ним тренеру.

```text
[User] ──── (имеет) ──── [HealthData]
  │                           │
  │                    (порождает)
  │                           │
  └──── (получает) ──── [Recommendation]

[Trainer] ──── (ведёт) ──── [Client]
```

## Логическая модель

### Основные таблицы

| Таблица | Назначение |
|---|---|
| `users` | Учётные записи и роли пользователей |
| `health_data` | История ежедневных метрик здоровья |
| `recommendations` | История выданных рекомендаций |
| `trainer_client` | Связь тренер–клиент (many-to-many) |

### Ключевые атрибуты

**users:** `id (uuid)`, `email`, `first_name`, `last_name`, `role (enum)`, `created_at`

**health_data:** `id (uuid)`, `user_id (fk)`, `weight`, `energy_level`, `sleep_quality`, `mood`, `recorded_at`

**recommendations:** `id (uuid)`, `client_id (fk)`, `readiness_index`, `training_type (enum)`, `intensity (enum)`, `duration_minutes`, `calculated_at`

**trainer_client:** `trainer_id (fk)`, `client_id (fk)`, `assigned_at`



