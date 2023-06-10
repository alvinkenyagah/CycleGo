
# event-management-web-app-server

This is the backend end of a project which is a joint effort by a group of students according to Phase-3 Capstone project assignment. It features a ruby based sever for the Event management web app that offers various services to users while focusing on convinience of the tools of managements Powered by Sinatra, Sqlite3 and ActiveRecords. The frontend is a react-app.

[Link to the frontend repository](https://github.com/joshhoneypot/event-management-web-app-client)

## ERD
![ERD](https://raw.githubusercontent.com/joshhoneypot/event-management-web-app-server/main/images/events%20sql.PNG?token=GHSAT0AAAAAACCBMGPQDW22PQ6VTZ4FCTB2ZECVBPQ)








## Run Locally

Clone the project
```bash
  git clone git@github.com:joshhoneypot/event-management-web-app-client.git
```

Go to the project directory
```bash
  cd event-management-web-app-server
```

Install the required dependencies as per the Gemfile. This action might require administrator privileges
```bash
  bundle install
```

Run the project
```bash
  bundle exec rackup run config.ru
```

The above terminal command starts up the server locally on port9292. To view the source code you can run this command inside the root directory
```bash
  code .
```

## Authors

- [Caren Wakuloba](https://github.com/carenwaks)

- [Jesse Thuku](https://github.com/jessyvee)

- [Alvin Kenyagah](https://github.com/alvinkenyagah)

- [Joshua Angugo](https://github.com/joshhoneypot)

