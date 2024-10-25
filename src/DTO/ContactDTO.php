<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class ContactDTO 
{
    #[Assert\NotBlank]
    public string $nom;

    #[Assert\NotBlank]
    #[Assert\Email(
        message: 'L\'email {{ value }} n\'est pas valide.',
    )]
    public string $email;

    #[Assert\NotBlank]
    public string $message;

}