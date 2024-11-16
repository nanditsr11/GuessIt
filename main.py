import random

# Dictionary to store user scores
user_scores = {}

print("Welcome to Higher, Lower, or Equal!")
player_name = input("Enter your name: ")

# Initialize highest score for the player
if player_name not in user_scores:
    user_scores[player_name] = 0

while True:
    current_number = random.randint(1, 100)
    print(f"\nStarting number: {current_number}")
    
    score = 0  # Current game score for the player

    while True:
        guess = input("Will the next number be higher, lower, or equal? (type 'higher', 'lower', or 'equal'): ").lower()
        next_number = random.randint(1, 100)
        print(f"The next number is: {next_number}")

        if (guess == "higher" and next_number > current_number) or \
           (guess == "lower" and next_number < current_number) or \
           (guess == "equal" and next_number == current_number):
            score += 1
            print("You guessed right!")
        else:
            print("Wrong guess!")
            break

        current_number = next_number

    # Update and display the highest score
    if score > user_scores[player_name]:
        user_scores[player_name] = score
        print(f"New high score for {player_name}! Your highest score is now {score}.")

    print(f"{player_name}, your score this round is: {score}. Your highest score is: {user_scores[player_name]}")

    # Ask if the player wants to play again
    play_again = input("\nDo you want to play again? (yes or no): ").lower()
    if play_again != "yes":
        print("Thanks for playing! Goodbye!")
        break
