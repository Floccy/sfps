
# Contact Management System

This is a simple Contact Management System implemented using Node.js and MySQL. The application provides functionalities to create, retrieve, update, delete, and search contacts. Each contact has properties like name, phone number, email, and address.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker: You need to have Docker installed on your machine. You can download Docker from here.
- Docker Compose: Docker Compose is used to define and run the multi-container Docker application. It's included as part of most Docker for Windows and Docker for Mac installations. For Linux, you might need to install it separately. You can find the installation instructions
### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `docker-compose up` to start the services.

## Usage

The application provides the following endpoints:

- `GET /contacts`: Retrieves all contacts.
- `GET /contacts/:id`: Retrieves a contact by ID.
- `POST /contacts`: Creates a new contact.
- `PUT /contacts/:id`: Updates a contact by ID.
- `DELETE /contacts/:id`: Deletes a contact by ID.
- `GET /search`: Searches for contacts by name.



## Authors

- [Your Name]