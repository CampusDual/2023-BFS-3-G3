package com.campusdual.backend.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IReviewService {
    public EntityResult reviewQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult reviewInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult reviewUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult reviewDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
