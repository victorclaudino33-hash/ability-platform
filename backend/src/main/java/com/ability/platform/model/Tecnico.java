package com.ability.platform.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = ""tecnicos"")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Tecnico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String cpf;
    private String base;
    private String status;
}