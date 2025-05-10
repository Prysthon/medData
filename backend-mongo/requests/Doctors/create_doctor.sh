TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWZkOTllYTM1OTlkNjA0OWRkNDgwOSIsImVtYWlsIjoidGlhZ29AZ21haWwuY29tIiwiaWF0IjoxNzQ2OTE4NzQ3LCJleHAiOjE3NDY5MjIzNDd9.X_tApWsoumKXbyyJ3Y3MLvBUKwpnWKqbH3AlKXnnHCA"

curl -i -X POST http://localhost:3000/doctors \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Dr. Ana Silva",
    "email": "ana.silva@example.com",
    "password": "senhaSegura",
    "crm": "123456-SP",
    "specialty": "Cardiologia"
  }'
