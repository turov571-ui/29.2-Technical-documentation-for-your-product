---
sidebar_position: 3
title: Потоки данных
---

# Потоки данных

В этом разделе описаны ключевые последовательности взаимодействия между компонентами FitAdapt.

## Сценарий: ввод метрик и расчёт рекомендации

Клиент вводит показатели здоровья, backend сохраняет их и публикует событие в Kafka. n8n подхватывает событие, рассчитывает Readiness Index и инициирует формирование рекомендации.

```plantuml
@startuml
actor Client
participant "Mobile App" as App
participant "Backend API" as Backend
database "PostgreSQL" as DB
queue "Kafka" as Kafka
participant "n8n Workflow" as N8n

Client -> App: Вводит вес, сон, энергию, настроение
App -> Backend: POST /health-data
Backend -> DB: INSERT health_data
Backend -> Kafka: publish health.data.saved
Kafka -> N8n: consume health.data.saved
N8n -> N8n: Calculate Readiness Index
N8n -> Backend: POST /recommendations
Backend -> DB: INSERT recommendation
Backend -> App: 200 OK
@enduml
```

## Сценарий: уведомление тренера

Если рассчитанный индекс готовности ниже порогового значения, система уведомляет тренера через push-канал.

```plantuml
@startuml
participant "n8n Workflow" as N8n
participant "Backend API" as Backend
queue "Kafka" as Kafka
participant "Notification Worker" as Worker
participant "OneSignal" as OneSignal
actor Trainer

N8n -> Kafka: publish notification.send
Kafka -> Worker: consume notification.send
Worker -> OneSignal: POST /notifications\n{include_external_user_ids, contents}
OneSignal -> Trainer: Push delivered
@enduml
```

## Правила оформления

- Каждая диаграмма сопровождается текстовым описанием.
- Для sequence-диаграмм используется PlantUML.
- Для сложных архитектурных схем — draw.io.
