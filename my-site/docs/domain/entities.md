---
sidebar_position: 2
title: Сущности и атрибуты
---

# Сущности и атрибуты

## Перечень enum-типов

| Enum | Значения | Использование |
|---|---|---|
| `UserRole` | CLIENT, TRAINER, ADMIN, OWNER | Роли пользователей |
| `TrainingType` | STRENGTH, CARDIO, YOGA, REST | Тип тренировки из DMN |
| `TrainingIntensity` | HIGH, MEDIUM, LOW, NONE | Интенсивность нагрузки |

## Сущность: User

| Атрибут | Тип | Описание |
|---|---|---|
| `id` | uuid | Первичный ключ |
| `email` | string | Email пользователя |
| `first_name` | string | Имя |
| `last_name` | string | Фамилия |
| `role` | UserRole | Роль в системе |
| `created_at` | datetime | Дата регистрации |

## Сущность: HealthData

| Атрибут | Тип | Описание |
|---|---|---|
| `id` | uuid | Первичный ключ |
| `user_id` | uuid (fk) | Ссылка на User |
| `weight` | float | Вес в кг (20–300) |
| `energy_level` | int | Уровень энергии (1–10) |
| `sleep_quality` | int | Качество сна (1–10) |
| `mood` | int | Настроение (1–10) |
| `recorded_at` | datetime | Дата и время записи |

## Сущность: Recommendation

| Атрибут | Тип | Описание |
|---|---|---|
| `id` | uuid | Первичный ключ |
| `client_id` | uuid (fk) | Ссылка на User (CLIENT) |
| `readiness_index` | float | Индекс готовности (0–10) |
| `training_type` | TrainingType | Рекомендованный тип |
| `intensity` | TrainingIntensity | Рекомендованная интенсивность |
| `duration_minutes` | int | Длительность (0–180 мин) |
| `rationale` | string | Текстовое обоснование |
| `calculated_at` | datetime | Время расчёта |
