---
sidebar_position: 1
title: Обзор API
---

# Обзор API

FitAdapt предоставляет REST API для мобильного клиента и внутренних интеграций. Основные сценарии: сохранение метрик здоровья, получение рекомендаций, работа тренера со списком клиентов.

## Технологические принципы

- **Архитектурный стиль:** REST
- **Формат обмена:** JSON
- **Спецификация:** OpenAPI 3.0.3
- **Аутентификация:** JWT Bearer Token
- **Документация:** Redoc через redocusaurus

## Основные группы методов

| Группа | Теги OpenAPI | Описание |
|---|---|---|
| Метрики здоровья | `Health` | `GET /health-profile`, `POST /health-data` |
| Рекомендации | `Recommendation` | `GET /recommendation/\{clientId\}` |
| Методы тренера | `Trainer` | `GET /trainer/clients`, `GET /trainer/clients/\{id\}` |

## Общие правила

- Все защищённые методы требуют `Authorization: Bearer <token>`.
- `POST /health-data` поддерживает `X-Idempotency-Key` для защиты от дублей.
- Ошибки возвращаются в едином формате: `\{ "code": "...", "message": "..." \}`.
- Пагинация: `page`, `size`, `sort` в query-параметрах.

