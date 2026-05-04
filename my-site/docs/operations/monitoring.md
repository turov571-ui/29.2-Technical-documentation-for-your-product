---
sidebar_position: 2
title: Мониторинг и алерты
---

# Мониторинг и алерты

## Что контролировать

| Компонент | Метрика | Порог алерта |
|---|---|---|
| Backend API | Доступность (uptime) | < 99.9% |
| Backend API | Ошибки 5xx | > 1% от запросов |
| Backend API | Latency p95 | > целевого SLA |
| Kafka | Lag consumer-группы n8n | > N сообщений |
| n8n | Ошибки workflow | Любая ошибка |
| OneSignal | Failed push-уведомления | > 5% от отправок |
| PostgreSQL | Время выполнения запросов | > 500ms |

## Примеры алертов

- Рост числа ошибок `5xx` в API за последние 5 минут
- Накопление необработанных сообщений в топике `health.data.saved`
- Увеличение времени ответа критичных методов (POST /health-data, GET /recommendation)
- Сбои доставки push-уведомлений через OneSignal
- Недоступность n8n workflow

## Инструменты (шаблон)

| Задача | Инструмент |
|---|---|
| Метрики и дашборды | Prometheus + Grafana |
| Трассировка запросов | OpenTelemetry + Jaeger |
| Логирование | ELK (Elasticsearch, Logstash, Kibana) |
| Алерты | Alertmanager / PagerDuty |

:::info Шаблон
Будут добавлены: конкретные дашборды, пороговые значения SLO, runbook для инцидентов, схема on-call ротации.
:::
