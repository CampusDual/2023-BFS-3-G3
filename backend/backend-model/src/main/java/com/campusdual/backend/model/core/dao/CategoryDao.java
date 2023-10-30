package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "CategoryDao")
@ConfigurationFile(
        configurationFile = "dao/CategoryDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class CategoryDao extends OntimizeJdbcDaoSupport {
    public static final String ID = "categoryid";
    public static final String NAME = "name";
    public static final String  DESCRIPTION= "description";
}