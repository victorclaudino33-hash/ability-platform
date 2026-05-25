package com.ability.platform.controller;

import com.ability.platform.model.Tecnico;
import com.ability.platform.repository.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tecnicos")
public class TecnicoController {
    @Autowired
    private TecnicoRepository repo;

    @GetMapping
    public List<Tecnico> listar() {
        return repo.findAll();
    }

    @PostMapping
    public Tecnico criar(@RequestBody Tecnico tecnico) {
        return repo.save(tecnico);
    }
}