﻿namespace ModernPantryBackend.Models.DTOs
{
    public class CreateUserDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfrimPassword { get; set; }
    }
}
