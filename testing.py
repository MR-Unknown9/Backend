import data as db
import time


def get_username():
    print("Enter username:")
    return input().strip().lower()


def get_password():
    print("Enter password:")
    return input().strip().lower()


def log_in():
    username = get_username()
    password = get_password()
    if db.check_user_with_password(username, password):
        print("Welcome!")
    else:
        print("Invalid username or password.")
        print("please try again, or sign up.")
        print("Do you want to sign up? (yes/no)")
        answer = input().strip().lower()
        if answer == "yes":
            sign_up()
        else:
            log_in()


def sign_up():
    username = get_username()
    password = get_password()
    if db.check_user(username):
        print("Username already exists. Please try again.")
    else:
        db.add_user(username, password)
        print("User created successfully!")
        print("Do you want to log in? (yes/no)")
        answer = input().strip().lower()
        if answer == "yes":
            log_in()
        else:
            print("going back to main menu...")


def delete_user():
    username = get_username()
    if not db.check_user(username):
        print("User does not exist.")
    else:
        print("Are you sure you want to delete this user? (yes/no)")
        answer = input().strip().lower()
        if answer == "yes":
            print("Enter password to confirm deletion:")
            password = get_password()
            if db.check_user_with_password(username, password):
                db.delete_user(username)
                print("User deleted!")
            else:
                print("Incorrect password. User not deleted.")


def main():
    while True:
        print("1. Log in")
        print("2. Sign up")
        print("3. Delete user")
        print("4. Exit")
        choice = input().strip()
        if choice == "1":
            log_in()
        elif choice == "2":
            sign_up()
        elif choice == "3":
            delete_user()
        elif choice == "4":
            print("Exiting...")
            time.sleep(1)
            db.close()
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
