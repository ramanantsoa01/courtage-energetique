<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class ContactDTO 
{
    #[Assert\NotBlank]
    public string $nom;

    #[Assert\NotBlank]
    #[Assert\Email()]
    public string $email;

    #[Assert\NotBlank]
    public string $message;

}