import { test, expect } from '@playwright/test';
import fetch from 'node-fetch';

test('GET /users should return status code 200', async ({}) => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  expect(response.status).toBe(200);
});

test('POST /users should return status code 201', async ({}) => {
  const newUser = {
    name: 'Victor Pimenta',
    username: 'victorpimenta',
    email: 'victorhpimenta@example.com',
    address: {
      street: 'Test 1 St',
      suite: 'Test 1',
      city: 'Test',
      zipcode: '12345',
      geo: {
        lat: '12.3456',
        lng: '78.9012',
      },
    },
    phone: '123-456-7890',
    website: 'test.com',
    company: {
      name: 'Test Inc',
      catchPhrase: 'Lorem ipsum',
      bs: 'Foo Bar',
    },
  };

  const response = await fetch('http://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  expect(response.status).toBe(201);
});

test('PUT /users/:id should update a user and return status code 200', async ({}) => {
    const userId = 1; // Assuming we're updating the user with ID 1
    const updatedUserData = {
      name: 'Updated Name',
      username: 'updatedusername',
      email: 'updatedemail@example.com',
      // Update other fields as needed
    };
  
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    });
  
    expect(response.status).toBe(200);
  });
  
  test('DELETE /users/:id should delete a user and return status code 200', async ({}) => {
    const userId = 1; // Assuming we're deleting the user with ID 1
  
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    });
  
    expect(response.status).toBe(200);
  });
