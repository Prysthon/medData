TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZkOTllYTM1OTlkNjA0OWRkNDgwOSIsImVtYWlsIjoidGlhZ29AZ21haWwuY29tIiwiaWF0IjoxNzQ2OTE4NzQ3LCJleHAiOjE3NDY5MjIzNDd9.X_tApWsoumKXbyyJ3Y3MLvBUKwpnWKqbH3AlKXnnHCA"

DOCTOR_ID="681fe50ba1874c2cd8958af4"

curl -i -X PUT http://localhost:3000/doctors/$DOCTOR_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Dr. Incompleto"
    // está faltando email, password, crm e specialty
  }'