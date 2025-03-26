import sqlite3


def conn():
    return sqlite3.connect("data.db")


def create_table():
    with conn() as db:
        db.execute(
            "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)"
        )


def add_user(username, password):
    with conn() as db:
        db.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)", (username, password)
        )


def delete_user(username):
    with conn() as db:
        db.execute("DELETE FROM users WHERE username = ?", (username,))


def check_user(username):
    with conn() as db:
        cursor = db.execute("SELECT * FROM users WHERE username = ?", (username,))
        return cursor.fetchone() is not None


def check_user_with_password(username, password):
    with conn() as db:
        cursor = db.execute(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            (username, password),
        )
        return cursor.fetchone() is not None


# Ensure the table is created when the module is imported
create_table()


def close():
    conn().close()
