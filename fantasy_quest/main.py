print("Welcome to Fantasy Quest!")

# Variables
first_name = "Lane "
last_name = "Wagner"
full_name = first_name + last_name
sentence_start = "You have "
sentence_end = " health"

player1_health = "1200"
player2_health = "1100"
sword_damage = 10
player_health = 1000
armor_multiplier = 2
poison_damage = -10
player_has_magic = True
armored_health = player_health * armor_multiplier
player_poison_health = player_health + poison_damage
health_after_attack = player_health - sword_damage

# The best sword variable holds the value of the best sword in the game
best_sword = "scimitar"
sword_name, sword_damage, sword_length = "Excalibur", 10, 200
enemy = None    # Nonetype

# Don't touch below this line
print(full_name)
print(f"Lollilfred's health is: {player_health}")
print(f"Lollilfred is hit by a sword for {sword_damage} damage...")
print(f"Lollilfred's health is now: {health_after_attack}")

print("Use the arrow keys to move")

# Multiple instructions
print("Jax: B-Kaw!")
print("Hero: ...")
print("Jax: Where are you off to this morning? Bkaw...")
print("Hero: Where did an owl learn to speak??")

# Innkeeper's responses
print("Ah! Great choices...")
print("Is there anything else I can help you with?")

# Player health
player_health = 900
print(player_health)
player_health = 800
print(player_health)
player_health = 700
print(player_health)
player_health = 600
print(player_health)
print(armored_health)

print(best_sword)