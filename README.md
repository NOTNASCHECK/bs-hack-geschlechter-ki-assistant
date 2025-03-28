# Medizinischer KI-Assistent

## Über den KI-Assistenten

Der Medizinische KI-Assistent ist ein intelligentes Werkzeug, das Ihnen bei der Diagnostik und Behandlung von Krankheiten unterstützt. Er verwendet künstliche Intelligenz, um Ihnen schnell und präzise Informationen über Krankheiten und deren Behandlung zu liefern.

## Features

- **Symptom-basierte Diagnostik**: Eingeben Sie Ihre Symptome, und der KI-Assistent liefert mögliche Diagnosen.
- **Behandlungsempfehlungen**: Erhält Sie Empfehlungen für die Behandlung Ihrer Krankheit.
- **Bedienungsanleitung**: Eine detaillierte Anleitung zur Bedienung des KI-Assistenten.

# F & A
## Erster Fall
### Anfrage
{
    "messages": [
        {
            "role": "user",
            "content": "Patient_spezifikation: population: female, age_range: 55, condition: arterial hypertension, treatment: Amlodipine 5mg daily Frage: Ist eine 55-jährige Frau mit arterieller Hypertonie, mit Blutdruck (145/90) mit Amlodipine 5mg täglich optimal behandelt? Antwortformat: Feedback und Abweichung aufführen. Stukturiiert und mit Quellenverweis auf die Quellendateien."
        }
    ]
}
### Antwort
{"id":"c45a34d4beb04137854cc29782dfa176","object":"chat.completion","model":"mistral-tiny","usage":{"promptTokens":133,"completionTokens":881,"totalTokens":1014},"created":1743177703,"choices":[{"index":0,"message":{"content":"Feedback: Die Behandlung einer 55-jährigen Frau mit arterieller Hypertonie (Bluthochdruck) mit Amlodipine 5mg täglich kann als Standardtherapie betrachtet werden, wenn sie keine Kontraindikationen hat und keine Komorbiditäten vorliegen. Amlodipine ist ein Kaliumkanalblocker, der zur Behandlung des arteriellen Hypertonie eingesetzt wird.\n\nQuelle:\n- Whelton PK, Carey RM, Aronow WS, et al. 2018 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: Executive Summary: A Report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines. Hypertension. 2018;71:e13-e115. doi: 10.1161/HYP.0000000000000065.\n\nAbweichung: Der Blutdruck (145/90) der Patientin liegt noch immer oberhalb der Empfehlungen des Joint National Committee on Prevention, Detection, Evaluation, and Treatment of High Blood Pressure (JNC 8). Die aktuellen Empfehlungen der American College of Cardiology (ACC) / American Heart Association (AHA) für die Behandlung von arterieller Hypertonie bei Patienten mit einem Systolischen Blutdruck (SBP) > 140 mmHg und Diastolischem Blutdruck (DBP) > 90 mmHg sind, eine Therapie einzuleiten, um den SBP auf < 140 mmHg und den DBP auf < 90 mmHg zu reduzieren.\n\nQuelle:\n- Whelton PK, Carey RM, Aronow WS, et al. 2018 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: Executive Summary: A Report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines. Hypertension. 2018;71:e13-e115. doi: 10.1161/HYP.0000000000000065.\n\nEs wird empfohlen, die Therapie anzupassen, um das Zielblutdruck zu erreichen. Dies kann durch eine Anpassung der Dosis von Amlodipine oder die Kombination mit einer weiteren Antihypertensivumtherapie erfolgen.\n\nQuelle:\n- Whelton PK, Carey RM, Aronow WS, et al. 2018 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults: Executive Summary: A Report of the American College of Cardiology/American Heart Association Task Force on Clinical Practice Guidelines. Hypertension. 2018;71:e13-e115. doi: 10.1161/HYP.0000000000000065.","toolCalls":null,"prefix":false,"role":"assistant"},"finishReason":"stop"}]}