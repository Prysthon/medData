
curl -X POST http://localhost:3000/login \
     -H "Content-Type: application/json" \
     -d '{"email": "inexistente@example.com", "password": "Senha123"}'